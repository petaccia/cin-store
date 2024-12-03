"use client";
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const FormsearchSidebarMovies = () => {
    const Router = useRouter();
    const pathname = usePathname();


  const today = format(new Date(), 'yyyy-MM-dd');

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
  const searchParams = new URLSearchParams(form);
  searchParams.append('sort_by', form.get('sort'));
  searchParams.append('release_date.gte', form.get('fromDate'));
  searchParams.append('release_date.lte', form.get('toDate'));

  Router.push(`${pathname}?${searchParams.toString()}`);
  };
  


  return (
    <div className="p-4 bg-background-card rounded-md shadow-xl">
        <div className="mb-4 border-b border-border text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-poppins">Filtrer</h2>
        </div>
      <form method="GET" onSubmit={handleForm} action="/movies/filter" className="space-y-6">
        {/* Date de sortie */}
        <div className="space-y-2 border-b-2 pb-4 border-border">
          <label htmlFor="fromDate" className="block text-sm font-medium text-text-secondary">
            Date de sortie
          </label>
          <div className="flex flex-col items-center gap-4">
            <div className="flex-1">
              <label htmlFor="fromDate" className="block text-xs text-text-muted">
                Du
              </label>
              <input
                type="date"
                name="fromDate"
                id="fromDate"
                defaultValue={today}
                className="mt-1 w-full rounded-md bg-background-body text-text-primary border border-border p-2 shadow-sm focus:border-accent-primary focus:ring-accent-primary"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="toDate" className="block text-xs text-text-muted">
                Au
              </label>
              <input
                type="date"
                name="toDate"
                id="toDate"
                defaultValue={today}
                className="mt-1 w-full rounded-md bg-background-body text-text-primary border border-border p-2 shadow-sm focus:border-accent-primary focus:ring-accent-primary"
              />
            </div>
          </div>
        </div>

        {/* Trier par */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-text-secondary">
            Trier par
          </label>
          <select
            name="sort"
            id="sort"
            defaultValue="popularity.desc"
            className="mt-1 block w-full rounded-md bg-background-body text-text-primary border border-border p-2 shadow-sm focus:border-accent-primary focus:ring-accent-primary"
          >
            <option value="popularity.desc">Popularité</option>
            <option value="vote_average.desc">Note</option>
            <option value="vote_count.desc">Nombre de votes</option>
          </select>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-accent-primary text-text-primary font-medium rounded-md shadow-md hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
        >
          FILTRER
        </button>
      </form>
    </div>
  );
};

export default FormsearchSidebarMovies;
