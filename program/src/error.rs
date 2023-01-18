use num_derive::FromPrimitive;
use solana_program::{
    decode_error::DecodeError,
    msg,
    program_error::{PrintProgramError, ProgramError},
};
use thiserror::Error;

#[derive(Error, Clone, Debug, Eq, PartialEq, FromPrimitive)]
pub enum Crows {
    /// Error description
    #[error("The 🐓 crows: Authority key is not a signer")]
    NotASigner,
    #[error("The 🐓 crows: Invalid Rooster PDA derivation")]
    RoosterPDAInvalid,
    #[error("The 🐓 crows: Transfer builder failed")]
    TransferBuilderFailed,
    #[error("The 🐓 crows: Delegate builder failed")]
    DelegateBuilderFailed,
    #[error("The 🐓 crows: Delegate builder failed")]
    LockBuilderFailed,
    #[error("The 🐓 crows: Delegate builder failed")]
    UnlockBuilderFailed,
}

impl PrintProgramError for Crows {
    fn print<E>(&self) {
        msg!(&self.to_string());
    }
}

impl From<Crows> for ProgramError {
    fn from(e: Crows) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for Crows {
    fn type_of() -> &'static str {
        "Error Thingy"
    }
}
