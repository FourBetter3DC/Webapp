import WordRetrieve from "../firebase/WordRetrieve";

const savedWords = await WordRetrieve();
  
  export default function SavedWordList() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {savedWords.map((savedWord) => (
          <a> {/*add href here */}
          <li key={savedWord.definitions} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-900">{savedWord.word}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{savedWord.definitions}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{savedWord.role}</p>
              {savedWord.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={savedWord.lastSeenDateTime}>{savedWord.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500"></p>
                </div>
              )}
            </div>
          </li>
          </a>
        ))}
      </ul>
    )
  }
  