import React from "react";
import FormBloc from "../bloc/FormBloc";

function Contact() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-background">
      <FormBloc />
    </main>
  );
}

export default Contact;
