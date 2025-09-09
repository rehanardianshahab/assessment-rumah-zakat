import { Suspense } from "react";
import Spinner from "../components/Spinner";
import AnimePage from "./components/AnimePage";

export default function OmdbPage() {
  return (
    // Memakai Suspense untuk menampilkan loading spinner saat menunggu data
    <Suspense fallback={<Spinner />}>
      <AnimePage />
    </Suspense>
  );
}
