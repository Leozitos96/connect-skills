import { AuthProvider } from "@/contexts/authContext";
import { Slot } from "expo-router";

import React from "react";
 
export default function TabLayout() { 
  return ( 
    <AuthProvider>
      <Slot/>
    </AuthProvider>

    
  ); 
}