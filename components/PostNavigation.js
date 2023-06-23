import Link from "next/link";

export default function PostNavigation(props) {
    return (
        <div className={`post-navigation border-t border-b border-solid border-gray-100 ${props.className}`}>
            <div className="flex justify-between">
            <p className="text-sm text-center md:text-left invisible md:visible" >
                                    © 2023 - Toate drepturile rezervate.
                                </p>
            </div>
        </div>
    );
}
