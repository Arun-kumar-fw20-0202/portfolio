import React from 'react'
import "../styles/githubs.css"

export default function Githubs() {
  return (
    <div className="gitMain">
        <h1>My Github</h1>
        <div className="gitimgBx">
            <img src="https://camo.githubusercontent.com/61e1286da1505b3d61a9a1382260dc9ae76b960d8ebcd08fc3011f195ea596bc/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d4172756e2d6b756d61722d667732302d30323032267468656d653d7261646963616c" alt="" />
        </div>
        <div className="gitimgBx">
            <img src="https://github-readme-activity-graph.cyclic.app/graph?username=Arun-kumar-fw20-0202&theme=react-dark&hide_border=true" alt="" />
        </div>
        <div className="gitimgBx">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arun-kumar-fw20-0202&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true" alt="" />
            <img src="https://github-readme-stats.vercel.app/api?username=Arun-kumar-fw20-0202&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true" alt="" />
        </div>
    </div>
  )
}
