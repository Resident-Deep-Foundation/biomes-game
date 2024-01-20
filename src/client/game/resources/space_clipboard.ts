import type { ClientContext } from "@/client/game/context";
import type { ClientResourcesBuilder } from "@/client/game/resources/types";
import type { RegistryLoader } from "@/shared/registry";

export async function addSpaceClipboardResources(
  loader: RegistryLoader<ClientContext>,
  builder: ClientResourcesBuilder
) {
  builder.addGlobal("/space_clipboard/preview_box", {
    box: undefined,
    mode: "unloaded",
  });
  builder.addGlobal("/space_clipboard/radius", {
    value: 3,
  });
}
