export function GitHubContributions({ username }: { username: string }) {
  return (
    <section className="grid gap-4 fade-in-up !delay-600">
      <h2>GitHub Activity</h2>
      <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-medium">Contributions in the last year</h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            @{username}
          </a>
        </div>
        <div className="overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`${username}'s GitHub contribution chart`}
            className="w-full h-auto min-w-[700px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
