import Link from 'next/link'
// import Avatar from '../components/avatar'
// import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  year,
  excerpt,
  // date,
  // author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {/* <p className="text-lg leading-relaxed mb-4">
        <Link href={`/posts/${slug}`}>
          {year}
        </Link>
      </p> */}
      <p className="text-lg leading-relaxed mb-6">{year}</p>
      {/* <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div> */}
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  )
}
