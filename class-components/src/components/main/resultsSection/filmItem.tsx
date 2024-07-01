import "./styles.css";
import React, { Component } from "react";
import { FilmItem } from "../../../types/types";

export class Film extends Component<{ film: FilmItem }> {
  render(): React.ReactNode {
    const { film } = this.props;
    return (
      <li>
        <p className="film-title__text">
          Film title: <span className="film-title__item">{film.title}</span>
        </p>
        <p className="film-date__text">
          Release date: <span className="film-date__item">{film.release_date}</span>
        </p>
        <p className="film-description__text">
          Film description: <span className="film-description__item">{film.opening_crawl}</span>
        </p>
      </li>
    );
  }
}
