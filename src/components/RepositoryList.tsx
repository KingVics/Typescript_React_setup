import {useState, useRef, useEffect} from 'react'
import { useAction } from '../hooks/useActions'
import { usedTypeSelector } from '../hooks/useTypedSelector'

const RepositoryList: React.FC = () => {
    const [query, setQuery] = useState('')
    const InputRef = useRef<HTMLInputElement>(null)
    const { searchRepository, SearchBooks, StarWars  } = useAction();
    const {loading, error, data} = usedTypeSelector((state) => state.repositories)

    useEffect(() => {
        if(!InputRef.current) {
            return;
        }
        InputRef.current.focus()
    }, [])

    
    useEffect(() => {
        SearchBooks()
    }, [])


    const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    
        searchRepository(query)
    }

    console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={InputRef} value={query} onChange={e => setQuery(e.target.value)} />
                <button>Search</button>
            </form>
            {loading ? 'Loading'
                : error ? error 
                : <ul>
                    {data.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default RepositoryList
