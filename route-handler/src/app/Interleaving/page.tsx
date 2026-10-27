import ServerComponent from '@/src/app/components/servercomponent'
import Clientcomponent from '@/src/app/components/clientcomponent'
export default function InterleavingPage() {
    return (
        <div>
            <h1>Interleaving Page</h1>
            {/* <ServerComponent />
             */}
             <Clientcomponent/>
                <ServerComponent/>
             <Clientcomponent/>
        </div>
    )
}