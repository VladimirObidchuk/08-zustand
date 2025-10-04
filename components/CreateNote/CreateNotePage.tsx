"use client";

import React from "react";
import css from "./CreateNote.module.css";
import NoteForm from "../NoteForm/NoteForm";

const CreateNotePage = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
};

export default CreateNotePage;
