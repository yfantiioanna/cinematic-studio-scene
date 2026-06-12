declare module "*.jsx" {
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module "react" {
  interface VideoHTMLAttributes<T> {
    playsinline?: string | boolean;
    "webkit-playsinline"?: string | boolean;
    "x5-playsinline"?: string | boolean;
  }
}
