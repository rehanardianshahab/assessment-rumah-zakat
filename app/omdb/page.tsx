import { Suspense } from "react";
import Spinner from "../components/Spinner";
import AnimePage from "./components/AnimePage";

export default function OmdbPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <AnimePage />
    </Suspense>
  );
}
