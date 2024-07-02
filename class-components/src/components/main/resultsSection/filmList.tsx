import "./styles.css";
import React from "react";
import { Component } from "react";
import { FilmItem } from "../../../types/types";
import { Film } from "./filmItem";

interface IFilmListProps {
  films: FilmItem[];
}

export class FilmList extends Component<IFilmListProps> {
  render() {
    const { films } = this.props;
    return (
      <ul className="results">
        {films.map((film) => (
          <Film key={film.episode_id} film={film} />
        ))}
      </ul>
    );
  }
}
