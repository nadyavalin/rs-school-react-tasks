import "./styles.css";
import React, { Component } from "react";
import { FilmItem } from "../../../types/types";

export class Film extends Component<{ film: FilmItem }> {
  render(): React.ReactNode {
    const { film } = this.props;
    return (
      <li>
        <p className="film-title__text">
          &#10066; Film title: <span className="film-title__item">{film.title}</span>
        </p>
        <p className="film-description__text">
          Film description: <span className="film-description__item">{film.opening_crawl}</span>
        </p>
      </li>
    );
  }
}
