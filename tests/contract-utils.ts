import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  NewShortcutCreated,
  OwnershipTransferred
} from "../generated/Contract/Contract"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createNewShortcutCreatedEvent(
  params: ethereum.Tuple,
  shortcut: Address
): NewShortcutCreated {
  let newShortcutCreatedEvent = changetype<NewShortcutCreated>(newMockEvent())

  newShortcutCreatedEvent.parameters = new Array()

  newShortcutCreatedEvent.parameters.push(
    new ethereum.EventParam("params", ethereum.Value.fromTuple(params))
  )
  newShortcutCreatedEvent.parameters.push(
    new ethereum.EventParam("shortcut", ethereum.Value.fromAddress(shortcut))
  )

  return newShortcutCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
