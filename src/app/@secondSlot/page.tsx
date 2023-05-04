import { Suspense } from "react";
import { TestClient } from "~/components/Test.client";
import { TestServer, TestServerAsync } from "~/components/Test.server";

const SlotPage = () => {
  return (
    <aside>
      This is the second slot page
      <TestClient />
      <TestServer />
      <Suspense fallback="Loading...">
        {/* @ts-ignore */}
        <TestServerAsync />
      </Suspense>
    </aside>
  );
};

export default SlotPage;
