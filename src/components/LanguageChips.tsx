import { clsx } from "clsx";
import type { JSX } from "react";
import  type {Language} from '../languages';
type LanguageChpsProps = {
    languages: Language[];
    wrongGuessCount: number;
};
const LanguageChips = ({
    languages,
    wrongGuessCount,
}: LanguageChpsProps): JSX.Element => {
    const languageElements:JSX.Element[] = languages.map((lang:Language, index:number):JSX.Element => {
        const isLanguageLost:boolean = index < wrongGuessCount;
        const styles:Omit <Language, "name"> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color,
        };
        const className:string = clsx("chip", isLanguageLost && "lost");
        return (
            <span className={className} style={styles} key={lang.name}>
                {lang.name}
            </span>
        );
    });

    return <section className="language-chips">{languageElements}</section>;
};

export default LanguageChips;
