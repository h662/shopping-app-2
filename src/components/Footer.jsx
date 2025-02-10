function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pink-400 p-4 text-white text-center">
      &copy; {year} ShopEasy. All rights reserved.
    </footer>
  );
}

export default Footer;
