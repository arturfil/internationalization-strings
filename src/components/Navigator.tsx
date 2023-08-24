import { Link } from "react-router-dom";

const urls = [
  { url: "/", name: "Home" },
  { url: "/participants", name: "Participants" },
  { url: "/information", name: "Information" },
];

export const Navigator = () => {
  return (
    <div>
      {urls &&
        urls.map((url) => (
          <li key={url.url}>
            <Link to={url.url}>{url.name}</Link>
          </li>
        ))}
    </div>
  );
};
