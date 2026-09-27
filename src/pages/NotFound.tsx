import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        주소가 바뀌었거나 삭제된 페이지예요.
      </p>
      <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline dark:text-indigo-400">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

/** 오프라인 폴백 안내 페이지 */
export function OfflinePage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">오프라인 상태입니다</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        인터넷에 연결되어 있지 않아요. 한 번 열었던 문서는 캐시에서 계속 볼 수 있습니다.
      </p>
      <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline dark:text-indigo-400">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
