import {
  Initialized as InitializedEvent,
  NewShortcutCreated as NewShortcutCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  Shortcut,  
} from "../generated/schema"

export function handleNewShortcutCreated(event: NewShortcutCreatedEvent): void {
  let entity = new Shortcut(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.router = event.params.params.router
  entity.tokenOut = event.params.params.tokenOut
  entity.chainId = event.params.params.chainId
  entity.fee = event.params.params.fee
  entity.dex = event.params.params.dex
  entity.shortcut = event.params.shortcut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
