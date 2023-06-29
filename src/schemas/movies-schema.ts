import Joi from "joi";
import { Movie } from "protocols";

const movieSchema = Joi.object<Movie>({
  name: Joi.string().required(),
  genre: Joi.string().required(),
  platform: Joi.string().required()
})

export default movieSchema;