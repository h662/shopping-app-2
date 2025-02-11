import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";

function Checkout() {
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);
  const { totalAmount } = useSelector((state) => state.cart);

  const [address, setAddress] = useState("");
  const [name, setName] = useState(isLoggedIn ? userInfo.name : "");

  // Toss 위젯 객체를 저장할 ref
  const widgetRef = useRef(null);

  // Toss 위젯 로드 및 렌더링
  useEffect(() => {
    const initTossPayments = async () => {
      // Test API KEY
      const tossPayments = await loadTossPayments(
        "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"
      );

      // 고객 키는 ANONYMOUS
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      widgetRef.current = widgets;

      await widgets.setAmount(totalAmount);

      // 결제 수단 및 약관 렌더링 (화면에 띄움)
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
  }, [totalAmount]);

  // 결제 요청
  const handlePaymentRequest = async (e) => {
    e.preventDefault();

    if (!widgetRef.current) return;

    try {
      await widgetRef.current.requestPayment({
        orderId: `order-${new Date()}`,
        orderName: "test",
        successUrl: window.location.origin + "/sandbox/success",
        failUrl: window.location.origin + "/sandbox/fail",
        customerEmail: "test@test.com",
        customerName: name,
        customerMobilePhone: "01012341234",
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn)
    return <Navigate to="/login" state={{ from: "/checkout" }} />;

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>

      <div id="payment-method"></div>
      <div id="agreement"></div>

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
          />
        </div>
        <div className="col-span-2">
          <button className="button-style" type="submit">
            Confirm Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
