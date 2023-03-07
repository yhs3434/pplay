import React from 'react';

export default function useAuthentication() {
  const handleSignIn = React.useCallback(() => {
    //
  }, []);

  const handleSignOut = React.useCallback(() => {}, []);

  return {
    handleSignIn,
    handleSignOut,
  };
}
