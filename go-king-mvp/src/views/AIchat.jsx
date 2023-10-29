import { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import Navbar from '../components/Navbar'

const AIchat = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  let configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

  delete configuration.baseOptions.headers['User-Agent'];

  const openai = new OpenAIApi(configuration);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: query,
        temperature: 0.5,
        max_tokens: 3000
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-emerald-100">
      <Navbar />
      <div className="max-w-screen-xl m-auto p-8 flex items-center justify-center">
        <div className="p-4 bg-white rounded shadow">
          {loading ? "ok" : ""}
          <h1 className="text-xl font-bold mb-4">
            OpenAI Integration with React
          </h1>
          <div className="flex justify-between gap-4">
            <input
              className="p-2 w-full h-auto mb-4 border bg-slate-50 rounded text-stone-800"
              value={query}
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query here..."></input>
            <button
              className="p-2 bg-emerald-600 text-white rounded h-10"
              onClick={() => handleClick()}
            >
              Submit
            </button>
          </div>
          <div className="mt-4 text-stone-800">
            <p>
              <strong>Response:</strong>
            </p>
            <p>{response}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIchat;