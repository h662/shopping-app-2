// Checkout.jsx
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";

// 모듈 수준에 플래그 선언 (컴포넌트 언마운트 시에도 유지됨)
let widgetInitialized = false;

function Checkout() {
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);
  const { totalAmount } = useSelector((state) => state.cart);

  const [address, setAddress] = useState("");
  const [name, setName] = useState(isLoggedIn ? userInfo.name : "");
  const [isRequesting, setIsRequesting] = useState(false);

  // Toss 위젯 객체를 저장할 ref
  const widgetRef = useRef(null);

  // 위젯 초기화 및 렌더링 (마운트 시 한 번만 실행)
  useEffect(() => {
    // 이미 초기화된 경우 다시 초기화하지 않음
    if (widgetInitialized) return;

    const initTossPayments = async () => {
      const tossPayments = await loadTossPayments(
        "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"
      );
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      widgetRef.current = widgets;

      // 금액 설정 (초기 금액)
      await widgets.setAmount({ currency: "KRW", value: totalAmount });

      // 결제 수단 및 약관 위젯 렌더링
      await Promise.all([
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);
    };

    initTossPayments();
    widgetInitialized = true; // 한 번 초기화되었음을 기록

    // cleanup: 언마운트 시 위젯 정리(초기화 플래그는 유지)
    return () => {
      if (widgetRef.current) {
        widgetRef.current.cleanup();
        widgetRef.current = null;
      }
      // widgetInitialized를 false로 설정하지 않습니다.
    };
  }, []); // 빈 배열: 마운트 시 한 번만 실행

  // totalAmount가 변경되면 기존 위젯의 금액만 업데이트 (렌더링은 하지 않음)
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAmount({ currency: "KRW", value: totalAmount });
    }
  }, [totalAmount]);

  // 결제 요청
  const handlePaymentRequest = async (e) => {
    e.preventDefault();
    if (!widgetRef.current) return;
    if (isRequesting) return; // 이미 요청 중이면 무시

    setIsRequesting(true);
    try {
      await widgetRef.current.requestPayment({
        orderId: `order-${new Date().getTime()}`,
        orderName: "토스 티셔츠 외 2건",
        successUrl: window.location.origin + "/sandbox/success",
        failUrl: window.location.origin + "/sandbox/fail",
        customerEmail: "test@test.com",
        customerName: name,
        customerMobilePhone: "01012341234",
      });
      // 결제 성공 시 페이지가 리다이렉트되므로 추가 처리는 필요 없음
    } catch (error) {
      console.error("Payment request error:", error);
      alert("결제 요청 중 오류가 발생했습니다. 다시 시도해 주세요.");
      setIsRequesting(false);
    }
  };

  // (로그인 체크 부분은 필요에 따라 사용하세요)
  // if (!isLoggedIn)
  //   return <Navigate to="/login" state={{ from: "/checkout" }} />;

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>

      {/* Toss Payments 위젯이 렌더링될 영역 */}
      <div
        id="payment-method"
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      ></div>
      <div
        id="agreement"
        style={{ minHeight: "100px", border: "1px solid #ccc" }}
      ></div>

      <form className="grid grid-cols-2 gap-4" onSubmit={handlePaymentRequest}>
        <div>
          <label className="label-style" htmlFor="name">
            Name
          </label>
          <input
            className="input-style"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label-style" htmlFor="address">
            Address
          </label>
          <input
            className="input-style"
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2">
          <button
            className="button-style"
            type="submit"
            disabled={isRequesting}
          >
            {isRequesting ? "Processing..." : "Confirm Purchase"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
