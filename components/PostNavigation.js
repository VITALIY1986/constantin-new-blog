import Link from "next/link";

export default function PostNavigation(props) {
    return (
        <div className={`post-navigation border-t border-b border-solid border-gray-100 ${props.className}`}>
            <div className="flex justify-between">
                <div className="pr-5">
                    {props.prevLink && (
                        <Link href={props.prevLink}>
                            <a className="block">
                                <span className="block mb-2 text-sm">⟵ PREV POST</span>
                                {props.prevTitle && <span className="font-bold">{props.prevTitle}</span>}
                            </a>
                        </Link>
                    )}
                </div>
                <div className="pl-5 text-right">
                    {props.nextLink && (
                        <Link href={props.nextLink}>
                            <a className="block">
                                <span className="block mb-2 text-sm">NEXT POST ⟶</span>
                                {props.nextTitle && <span className="font-bold">{props.nextTitle}</span>}
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
