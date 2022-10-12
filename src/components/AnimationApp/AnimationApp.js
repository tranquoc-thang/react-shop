import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Redirect,
  useLocation,
  useParams,
} from "react-router-dom";
export default function AnimationApp({ children }) {
  let location = useLocation();

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}></Routes>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
