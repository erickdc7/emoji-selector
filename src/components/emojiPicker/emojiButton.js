import styles from "./emojiPicker.module.css";

export default function EmojiButton({ emoji, onClick }) {
    function handleOnClick() {
        onClick(emoji);
    }

    return (
        <button onClick={handleOnClick} className={styles.emojiButton}>
            {emoji.symbol}
        </button>
    );
}