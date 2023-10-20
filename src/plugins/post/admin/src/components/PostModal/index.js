import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";

export default function PostModal({ setShowModal, addPost }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addPost({ name: name, description: description });
      setShowModal(false);

    } catch (e) {
      console.log("error", e);
    }
  };

  const getNameError = () => {
    // Form validation error

    if (name.length > 40) {
      return "post title is too long";
    }
    return null;
  };

  const getDescriptionError = () => {
    // Form validation error
    if (description.length > 400) {
      return "description is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add Post
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="Post Title"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getNameError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <TextInput
        placeholder="Post Description"
        label="Description"
        description="text"
        hint="Max 400 characters"
        error={getDescriptionError()}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add Post</Button>}
      />
    </ModalLayout>
  );
}