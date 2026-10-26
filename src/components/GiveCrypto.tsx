"use client";

import { DonateForm } from "@/components/DonateForm";
import { ArrivalDonate } from "@/components/ArrivalDonate";
import { DONATION_ADDRESS_IS_PLACEHOLDER } from "@/lib/web3-config";

// Until ORG publishes a real address, no address is shown and nothing can be sent: the kit's giving
// section stands in, with ORG's own ways to give and the practice gift. The wallet form returns exactly
// as it was once NEXT_PUBLIC_DONATION_ADDRESS is set. (A client component, because web3-config builds
// the wagmi config, which only runs in the browser.)
export function GiveCrypto() {
  return DONATION_ADDRESS_IS_PLACEHOLDER ? <ArrivalDonate /> : <DonateForm />;
}
