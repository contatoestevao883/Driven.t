CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" TEXT NOT NULL,
	"genre" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT FALSE
)