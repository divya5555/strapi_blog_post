/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import postRequests from "../../api/post";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Illo } from "../../components/Illo";

import PostModal from "../../components/PostModal";
import PostTable from "../../components/PostTable";

const HomePage = () => {
  const [postData, setPostData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);

    try {
     const post = await postRequests.getAllPosts();
     setPostData(post);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initFetchData = async () => {
      await fetchData();
    };

    initFetchData();
  }, []);

  async function addPost(data) {
   await postRequests.addPost(data);
    await fetchData();
  }

  async function togglePost(data) {
   await postRequests.togglePost(data.id);
  }

  async function deletePost(data) {
   await postRequests.deletePost(data.id);
    await fetchData();
  }

  async function editPost(id, data) {
   await postRequests.editPost(id, data);
    await fetchData();
  }

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <Layout>
      <BaseHeaderLayout
        title="Post Plugin"
        subtitle="List of all Post."
        as="h2"
      />

      <ContentLayout>
        {postData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any posts yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first post
              </Button>
            }
          />
        ) : (
          <>
            <PostTable
              postData={postData}
              setShowModal={setShowModal}
              togglePost={togglePost}
              deletePost={deletePost}
              editPost={editPost}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <PostModal setShowModal={setShowModal} addPost={addPost} />}
    </Layout>
  );
};

export default memo(HomePage);