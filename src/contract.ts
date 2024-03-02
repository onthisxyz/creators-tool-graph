import {
  Initialized as InitializedEvent,
  NewShortcutCreated as NewShortcutCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  Initialized,
  NewShortcutCreated,
  OwnershipTransferred
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewShortcutCreated(event: NewShortcutCreatedEvent): void {
  let entity = new NewShortcutCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.params_router = event.params.params.router
  entity.params_tokenOut = event.params.params.tokenOut
  entity.params_chainId = event.params.params.chainId
  entity.params_fee = event.params.params.fee
  entity.params_dex = event.params.params.dex
  entity.shortcut = event.params.shortcut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
