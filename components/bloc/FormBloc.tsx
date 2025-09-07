import React from "react";
import ContactForm from "../ui/ContactForm";

function FormBloc() {
  return (
    <div className="container mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 rounded-xl border bg-card shadow h-fit">
      <ContactForm />
    </div>
  );
}

export default FormBloc;
