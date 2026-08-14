import { RequireAuth } from "../components/RequireAuth";
import { DealerPanel } from "../components/dealer/DealerPanel";

export function DealerPage() {
  return (
    <RequireAuth>
      <DealerPanel />
    </RequireAuth>
  );
}
