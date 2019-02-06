import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = props => (
  <div>
    <p>header</p>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/meg">
      <a>Meg</a>
    </Link>
  </div>
);
export default Header;
