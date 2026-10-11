import Container from "./Container"

const MenuSkeleton = () => {
  return (
    <div className="bg-[#F3FBF4] border-t-2 border-b-2 border-[#F0F5F0] py-4">
      <Container>
        <div className="flex items-center gap-x-6 overflow-hidden pl-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-x-2">
              <div className="skeleton h-4 w-4 rounded-full"></div>
              <div className="skeleton h-3 w-14 rounded"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default MenuSkeleton