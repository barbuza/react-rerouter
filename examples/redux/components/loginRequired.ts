const LOGIN_REQUIRED = Symbol("LOGIN_REQUIRED");

export function loginRequired<T extends any>(target: T): T {
  target[LOGIN_REQUIRED] = true;
  return target;
}

/**
 * check WrappedComponent due to react-redux behavior
 */
export function isLoginRequiredComponent(component: any): boolean {
  if (component.WrappedComponent) {
    if (component.WrappedComponent[LOGIN_REQUIRED]) {
      return true;
    }
  }
  return !!component[LOGIN_REQUIRED];
}
