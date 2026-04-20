import { Loader2} from "lucide-react"
const Loading=()=>{
    return (
      <div className="w-full min-h-screen  ">
        <div className=" w-full mx-auto mt-80">
          <Loader2 className="animate-spin h-80 w-80 mx-auto" />
        </div>
      </div>
    );
}

export default Loading 