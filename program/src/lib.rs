use crate::{error::Crows, instruction::RoosterCommand};
use borsh::{BorshDeserialize, BorshSerialize};
use lpl_token_metadata::instruction::{
    builders::TransferBuilder, InstructionBuilder, TransferArgs,
};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::ProgramResult,
    instruction::{AccountMeta, Instruction},
    msg,
    program_error::ProgramError,
    program_memory::sol_memcpy,
    pubkey,
    pubkey::Pubkey,
};

pub mod assertions;
pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod pda;
pub mod processor;
pub mod state;

pub use lpl_token_metadata::{processor::AuthorizationData, state::TokenDelegateRole};

solana_program::declare_id!("rstP3sVCeYPT1QMqESr1xiNM2PwapJnSKBNmJdY96pX");

pub const SAFE_TOKEN_PROGRAM_ID: Pubkey = pubkey!("ToKLx75MGim1d1jRusuVX8xvdvvbSDESVaNXpRA9PHN");
pub const SPL_ATA_TOKEN_PROGRAM_ID: Pubkey =
    pubkey!("AToD9iqHSc2fhEP9Jp7UYA6mRjHQ4CTWyzCsw8X3tH7K");
pub const MPL_TOKEN_AUTH_RULES_PROGRAM_ID: Pubkey =
    pubkey!("autNTWWsmgHkTc9xGwaED2K7UMXB1YurFEuwiCKXpS9");
