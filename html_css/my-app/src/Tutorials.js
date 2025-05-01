import { useEffect, useState } from "react";
import axios from "axios";

function Tutorials() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Loading Data...");
        axios
            .get("http://localhost:8000/api/tutorials")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Something went wrong");
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div style={styles.center}>
            <div style={styles.loader}></div>
            <div>Loading...</div>
        </div>
    );

    if (error) return (
        <div style={{ color: "red", textAlign: "center" }}>
            Error: {error}
        </div>
    );

    if (data.length === 0) return (
        <div style={{ textAlign: "center" }}>
            No Tutorials Found.
        </div>
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>Listing Tutorials 📚</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                        <strong>{post.title}</strong> <br />
                        {post.description} <br />
                        <em>{post.published ? "Published ✅" : "Unpublished ❌"}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    center: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
    },
    loader: {
        border: "8px solid #f3f3f3",
        borderTop: "8px solid #3498db",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        animation: "spin 1s linear infinite",
    }
};

// Add this global CSS somewhere in your project (App.css or index.css)
// or inside a <style> tag if you prefer
/*
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/

export default Tutorials;
