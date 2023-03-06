/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@safecoin/web3.js';
import { InstructionThingArgs, instructionThingArgsBeet } from '../types/InstructionThingArgs';

/**
 * @category Instructions
 * @category InstructionThing
 * @category generated
 */
export type InstructionThingInstructionArgs = {
  instructionThingArgs: InstructionThingArgs;
};
/**
 * @category Instructions
 * @category InstructionThing
 * @category generated
 */
export const InstructionThingStruct = new beet.BeetArgsStruct<
  InstructionThingInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['instructionThingArgs', instructionThingArgsBeet],
  ],
  'InstructionThingInstructionArgs',
);
/**
 * Accounts required by the _InstructionThing_ instruction
 *
 * @property [_writable_, **signer**] signedWritableAccount signed, writable account description
 * @property [_writable_] writableAccount writable, non signed account description
 * @property [] nonWritableAccount non signed, non writable account description
 * @category Instructions
 * @category InstructionThing
 * @category generated
 */
export type InstructionThingInstructionAccounts = {
  signedWritableAccount: web3.PublicKey;
  writableAccount: web3.PublicKey;
  nonWritableAccount: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const instructionThingInstructionDiscriminator = 0;

/**
 * Creates a _InstructionThing_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InstructionThing
 * @category generated
 */
export function createInstructionThingInstruction(
  accounts: InstructionThingInstructionAccounts,
  args: InstructionThingInstructionArgs,
  programId = new web3.PublicKey('MyProgram1111111111111111111111111111111111'),
) {
  const [data] = InstructionThingStruct.serialize({
    instructionDiscriminator: instructionThingInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signedWritableAccount,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.writableAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.nonWritableAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
