import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { TextInput } from "@strapi/design-system/TextInput";
import Pencil from "@strapi/icons/Pencil";
import Trash from "@strapi/icons/Trash";
import Plus from "@strapi/icons/Plus";

function PostCheckbox({ value, checkboxID, callback, disabled }) {
  const [isChecked, setIsChecked] = useState(value);

  function handleChange() {
    setIsChecked(!isChecked);
    {
      callback && callback({ id: checkboxID, value: !isChecked });
    }
  }

  return (
    <BaseCheckbox
      checked={isChecked}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

function PostInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="post-input"
      name="post-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

function PostDescription({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="post-input"
      description="post-input"
      error={value.length > 400 ? "Text should be less than 400 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function PostTable({
  postData,
  togglePost,
  deletePost,
  editPost,
  setShowModal,
}) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowModal(true)} icon={<Plus />}>
            Add a post
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Post</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Description</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {postData.map((post) => {
            const [inputValue, setInputValue] = useState(post.name);
            const [inputDescription, setInputDescription] = useState(post.description);

            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={post.id}>
                <Td>
                  <Typography textColor="neutral800">{post.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <PostInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{post.name}</Typography>
                  )}
                </Td>

                <Td>
                  {isEdit ? (
                    <PostDescription
                      value={inputDescription}
                      onChange={(e) => setInputDescription(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{post.description}</Typography>
                  )}
                </Td>

                <Td>
                  <PostCheckbox
                    value={post.isDone}
                    checkboxID={post.id}
                    callback={togglePost}
                    disabled={isEdit}
                  />
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editPost(post.id, { name: inputValue, description: inputDescription })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <IconButton
                        onClick={() => setIsEdit(true)}
                        label="Edit"
                        noBorder
                        icon={<Pencil />}
                      />

                      <Box paddingLeft={1}>
                        <IconButton
                          onClick={() => deletePost(post)}
                          label="Delete"
                          noBorder
                          icon={<Trash />}
                        />
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}