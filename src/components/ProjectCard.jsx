import Github from "../assets/icons/github.svg?react";
import { Button1 } from "../components/Buttons";
import SvgIcon from "../components/SvgIcon";

export default function ProjectCard({ children }) {
  return <div className="project-card">{children}</div>;
}

function Content({ children }) {
  return <div className="project-card-content">{children}</div>;
}

function Holder({ children }) {
  return <div className="project-card-holder">{children}</div>;
}

function Tags({ children }) {
  return <div className="project-card-tags">{children}</div>;
}

function Tag({ hashtag }) {
  return <span className="project-card-tag">{hashtag}</span>;
}

function CardActions({ visit, source }) {
  return (
    <div className="project-card-actions">
      {source && (
        <a href={source} target="_blank">
          <Button1>
            <SvgIcon icon={Github} />
            Source
          </Button1>
        </a>
      )}
    </div>
  );
}

export { Holder, Content, Tags, Tag, CardActions };
