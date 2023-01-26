import * as React from "react";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const sendEmail = await fetch(`/.netlify/functions/create-rsvp`, {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
      }),
    });

    return sendEmail;
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl">Email RSVP Demo</h1>
      <form
        className="flex flex-col gap-6 p-10 border-2 mt-3 border-neutral-700 rounded-xl "
        onSubmit={handleSubmit}
      >
        <span className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            className="border-2 border-black rounded-lg p-3"
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            className="border-2 border-black rounded-lg p-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
