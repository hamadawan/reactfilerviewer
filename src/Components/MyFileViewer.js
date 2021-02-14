import FileViewer from "react-file-viewer";
import "../App.css"
import {
  useLocation,
} from "react-router-dom";

function MyFileViewer() {

  let location = useLocation();
  const fileType = ()=>{
    let type = location.search.split("url=").pop()
    return type.split(".").pop()
  }

  const Url = () =>{
    return location.search.split("url=").pop()
  }
  const onError = () => {
      alert("Error occur during file opening!")
  }

    return (
      <div>
        <a className="button" href={Url()} target="_blank">Download</a>
        <FileViewer 
            fileType={fileType()}
            filePath={Url()}
            onError={onError}
            allowFullScreen={true}
        ></FileViewer>
      </div>
    );
  }
  
export default MyFileViewer;