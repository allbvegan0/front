import React, { useState } from "react";
import Router from "next/router";
import Layout from "../../components/molecules/decorative/layout";
import { useDispatch } from "react-redux";
import { handleCreatePost } from "../../redux/thunk/post";
import { commonActions } from "../../redux/slices/common";
import router from "next/router";
import {useSession} from '../../hooks/nav'

const CreateDraft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [session,loading] = useSession()
  const session = useSession()
  const dispatch = useDispatch()
  // getUserId
  // localhost://
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };

      dispatch(handleCreatePost({title, content, name: `${session.user.name}`}))
      dispatch(commonActions.showToast({message:"Post Successfully created", type:"success"}))
      router.push("/admin/drafts")
   
    } catch (error) {
      console.error(error);
      dispatch(commonActions.showToast({message:"Post Error created", type:"error"}))

    }
  }
  var loading = false

  
  if(loading){
    return <h3>Loading</h3>
  }

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h2>New Draft</h2>
          <h5>{title.length}</h5>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <h5>{content.length}</h5>
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background-color: red;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          height: auto
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
          background-color: lightgrey;
        }
        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};


export default CreateDraft;
