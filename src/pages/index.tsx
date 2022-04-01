import React, { FC, useCallback, useState } from 'react';
import Top from '../components/Top';


const MyApp: React.FC = () => {
  const conf = {
    en: "Are you sure?",
    fr: "Êtes-vous sûr?",
    es: "Está seguro?",
    ja: "よろしいですか？",
    zh: "您确定吗？",
  };
  type TypeOfLanguage = typeof conf;
  type Language = keyof TypeOfLanguage;

  //　まとめると
  type key = keyof typeof conf;
  const test: key  = "en"

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  let aiueo = user;
  let clone = Object.assign({}, user);
  aiueo.name = "aiueo入りました"
  user.name = "user入りました"
  // ネストした値は同期されてしまう
  // user.sizes.width = 100

  let deepClone = JSON.parse(JSON.stringify(user))
  user.sizes.width = 100
  console.log("aiueo", aiueo.name)
  console.log("user", user.sizes)
  console.log("cloneName", clone.name)
  console.log("cloneSize", clone.sizes)

  console.log("deepCloneSize", deepClone.sizes)


  return (
    <div>
      <h1>おやです</h1>
      <Top text="下記くけこ">
        testChildren
      </Top>
    </div>
  );
}

export default MyApp;